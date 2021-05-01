import * as AWS from 'aws-sdk'
import {CreateEmployeeRequest} from './requests/CreateEmployeeRequest'
import {UpdateEmployeeRequest} from './requests/UpdateEmployeeRequest'
import {createLogger} from '../src/utils/logger'
import {EmployeeRecord} from './models/EmployeeRecord'
import {EmployeeDelete} from './models/EmployeeDelete'
import {EmployeeUpdate} from './models/EmployeeUpdate'
import * as uuid from 'uuid';
import {createEmployee} from './DataLayer' 
import {deleteEmployee} from './DataLayer'
import {getEmployees} from './DataLayer' 
import {UpdateEmployees} from './DataLayer' 

const s3 = new AWS.S3({
    signatureVersion: 'v4'
  })
const current_date = new Date()
 
const Logging = createLogger('Inside BusinessLogic.ts')

export async function createNewEmployee(newEmplyeeRecord: CreateEmployeeRequest, userId: string): Promise<EmployeeRecord>{
    Logging.info('Inside Create New Employee', newEmplyeeRecord, userId)
    
    const employeeUUID = uuid.v4()
    const newItem = await createEmployee(
        {
        userId: userId,
        employeeId: employeeUUID,
        fullname: newEmplyeeRecord.fullname,
        position: newEmplyeeRecord.position,
        gender: newEmplyeeRecord.gender,
        age: newEmplyeeRecord.age,
        isManager: false,
        contractStartAt: current_date.toISOString(),
        contractExpiredAt: (new Date(current_date.getFullYear() + 1,current_date.getMonth(), current_date.getDate())).toISOString(), // Add one years for contract expiration
        photo: 'https://'+process.env.S3_BUCKET_NAME+'.s3-eu-west-1.amazonaws.com/'+employeeUUID
    }
    )
    return newItem
}


export async function deleteEmployeeRecord(UserId: string, EmployeeID:string): Promise<EmployeeDelete> {
    Logging.info('Busniess Logic - Inside deleteEmployeeRecord - EmployeeID', EmployeeID)
    const EmployeeDeleteRecord = await deleteEmployee(
        {
        userId: UserId,
        employeeId: EmployeeID 
        })
    return EmployeeDeleteRecord
}


export async function uploadURL(UploadURL:string){
    Logging.info('Inside upload URL', UploadURL)
        return s3.getSignedUrl('putObject', {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: UploadURL,
        Expires: 300
      })
}


export async function getAllEmployees(userId:string): Promise<EmployeeRecord[]> {
    Logging.info('Inside All Employees', userId)
    return await getEmployees(userId)
}


export async function UpdateEmployee(updateEmployee:UpdateEmployeeRequest, employeeId:string, userId:string): Promise<void> {
    await UpdateEmployees(updateEmployee, employeeId, userId);
}
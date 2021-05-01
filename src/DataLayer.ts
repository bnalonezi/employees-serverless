import {EmployeeRecord} from './models/EmployeeRecord'
import {EmployeeDelete} from './models/EmployeeDelete'
import {EmployeeUpdate} from './models/EmployeeUpdate'
import * as AWS from 'aws-sdk'
import {DocumentClient } from 'aws-sdk/clients/dynamodb'
import {createLogger} from './utils/logger'
import * as AWSXRay from 'aws-xray-sdk' 

const AWSXRay = require('aws-xray-sdk')
const XAWS = AWSXRay.captureAWS(AWS);
const documentClient: DocumentClient =  createDynamoDBClient()

const Logging = createLogger('nside IDaraLayer.ts')


export async function createEmployee(EmployeeRecord: EmployeeRecord): Promise<EmployeeRecord> {
    await documentClient
    .put({
        TableName: process.env.EMPLOYEE_TABLE,
        Item: EmployeeRecord
      })
      .promise()
    return EmployeeRecord
}

export async function deleteEmployee(EmployeeDelete: EmployeeDelete): Promise<EmployeeDelete>{
  Logging.info('Data Layer - Inside deleteEmployeeRecord - EmployeeID', EmployeeDelete)
  console.log(EmployeeDelete)
    await documentClient
    .delete({
        TableName: process.env.EMPLOYEE_TABLE,
        Key: EmployeeDelete
      })
      .promise()
    return EmployeeDelete 
}

export async function getEmployees(userId:string): Promise<EmployeeRecord[]>{
    const output = await documentClient.query({
        TableName: process.env.EMPLOYEE_TABLE,
        KeyConditionExpression: '#userId = :i',
        ExpressionAttributeNames: {
          '#userId': 'userId'
        },
        ExpressionAttributeValues: {
          ':i': userId
        }
      })
      .promise()
return output.Items as EmployeeRecord[]
}

export async function UpdateEmployees(EmployeeUpdate:EmployeeUpdate,employeeId:string, userId:string): Promise<void> {
    await documentClient.update({
        TableName: process.env.EMPLOYEE_TABLE,
        Key: {
            userId: userId,
            employeeId: employeeId
          },
          UpdateExpression: "set fullname=:fullname, #ps=:position, gender=:gender, age=:age, isManager=:isManager",
          ExpressionAttributeValues:{
              ":fullname": EmployeeUpdate.fullname,
              ":position": EmployeeUpdate.position,
              ":gender": EmployeeUpdate.gender,
              ":age": EmployeeUpdate.age,
              ":isManager": EmployeeUpdate.isManager,
          },
          ExpressionAttributeNames: {
            "#ps": "position"
          }
    }).promise()
}

function createDynamoDBClient() {
    return new XAWS.DynamoDB.DocumentClient()
  }



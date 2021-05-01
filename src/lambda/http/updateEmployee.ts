import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import {getUserId} from '../utils'
import { UpdateEmployeeRequest } from '../../requests/UpdateEmployeeRequest'
import {UpdateEmployee} from '../../BusinessLogic'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const employeeId = event.pathParameters.employeeId
  const updatedEmployee: UpdateEmployeeRequest = JSON.parse(event.body)

  const userId = getUserId(event)

  const record = await UpdateEmployee(updatedEmployee, employeeId, userId) 

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH',
      'Access-Control-Allow-Headers': 'Accept'
    },
    body: JSON.stringify({
      record
    })
  }
}

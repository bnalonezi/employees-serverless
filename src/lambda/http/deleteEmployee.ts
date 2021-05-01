import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { getUserId } from '../utils'
import { deleteEmployeeRecord } from '../../BusinessLogic'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const employeeId = event.pathParameters.employeeId
  const userId = getUserId(event)
  
  await deleteEmployeeRecord(userId, employeeId)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: ''
  }
}

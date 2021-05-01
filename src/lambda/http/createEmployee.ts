import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { getUserId } from '../utils'
import { CreateEmployeeRequest } from '../../requests/CreateEmployeeRequest'
import { createNewEmployee } from '../../BusinessLogic'
import {createLogger} from '../../utils/logger'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const Logging = createLogger('Inside create Employee.ts')
  
  Logging.info('before CreateEmployeeRequest')
  const newEmployee: CreateEmployeeRequest = JSON.parse(event.body)
  Logging.info('after CreateEmployeeRequest', newEmployee)
  const userId = getUserId(event)
  const newRecord = await createNewEmployee(newEmployee , userId)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH',
      'Access-Control-Allow-Headers': 'Accept'
    },
    body: JSON.stringify({
      item: newRecord
    })
  }
}

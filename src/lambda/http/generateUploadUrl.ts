import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import {uploadURL} from '../../BusinessLogic'


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const employeeId = event.pathParameters.employeeId
  const uploadUrl = await uploadURL(employeeId)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH',
      'Access-Control-Allow-Headers': 'Accept'
    },
    body: JSON.stringify({
      uploadUrl
    })
}
}

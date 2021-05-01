# Serverless Employees managment

This app use aws lambda function, aws s3, Auth0 and serverless freamwork.


# Functionality of the application

This Backend serverless APIs for manage employees like create employee, list, update ,delet and upload photo.


# How to test the application

## prerequest (demo account for test)
apiId: `o48im5fetl`
authToken: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5DUF9MQ1NHWWJ6T3hKS0tCeTJ6dSJ9.eyJpc3MiOiJodHRwczovL3NlcnZlcmxlc3MtdG9kby51cy5hdXRoMC5jb20vIiwic3ViIjoiNG5RVldKOXBZaXk1VG1nd292NndCSnBWT1N0ZEVPNldAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc2VydmVybGVzcy10b2RvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjE5ODQzMjc4LCJleHAiOjE2MTk5Mjk2NzgsImF6cCI6IjRuUVZXSjlwWWl5NVRtZ3dvdjZ3QkpwVk9TdGRFTzZXIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.IXrwfAaGoMIq4tlJuUDwWr2_S6iaaCrx_fHyos7Rux1eTvi_RB6c6HBFC4oe_ukr6FpMvoqdjb1opXLRQXa5eMuSsZycG1UMnH6bd0ebesrA9rbihQjLWCgFVGgDv8IBM058cH0K8nScJcy0qgsiPWL-CrMw6G_ztA3lFLCgwfYRxkqD06p6Da6vSyb2B2ijqIDTfHqShEjU6DRRQFSvx-uslpWtlxyqbsyJk7TvR9muXYBhqapFDHjAx-uDm52O9thG9P7_xP7fGTM1KIHko2k2HEX4Y-4CeBqdQv9l-Bi7kQHzYLYKHqSq5sa7DImG0T7LJDv5xToBqllzsPVSog`


You can find a Postman collection in this project.

# Endpoints of the application

  The response below examples of the endpoints


* `Get all Employees` - get all employees.

```json
{
    "records": [
        {
            "contractExpiredAt": "2022-05-01T00:00:00.000Z",
            "isManager": false,
            "photo": "https://serverless-employees-db-bucket-bandar-dev.s3-eu-west-1.amazonaws.com/4dce17ba-c9d2-468c-a987-1145ee3fbff6",
            "contractStartAt": "2021-05-01T10:12:46.019Z",
            "employeeId": "4dce17ba-c9d2-468c-a987-1145ee3fbff6",
            "userId": "4nQVWJ9pYiy5Tmgwov6wBJpVOStdEO6W@clients",
            "fullname": "Bandar Alonezi333",
            "position": "Technical lead333",
            "gender": "Male",
            "age": "30"
        },
        {
            "contractExpiredAt": "2022-05-01T00:00:00.000Z",
            "isManager": false,
            "photo": "https://serverless-employees-db-bucket-bandar-dev.s3-eu-west-1.amazonaws.com/832bae2c-5eb4-46f4-8db9-00605f3477d9",
            "contractStartAt": "2021-05-01T10:12:46.019Z",
            "employeeId": "832bae2c-5eb4-46f4-8db9-00605f3477d9",
            "userId": "4nQVWJ9pYiy5Tmgwov6wBJpVOStdEO6W@clients",
            "fullname": "Bandar Alonezi",
            "position": "Technical lead",
            "gender": "Male",
            "age": "25"
        },
        {
            "contractExpiredAt": "2022-05-01T00:00:00.000Z",
            "isManager": true,
            "photo": "https://serverless-employees-db-bucket-bandar-dev.s3-eu-west-1.amazonaws.com/93b295a7-099f-41da-89fc-5871e6514736",
            "contractStartAt": "2021-05-01T07:05:08.807Z",
            "employeeId": "93b295a7-099f-41da-89fc-5871e6514736",
            "userId": "4nQVWJ9pYiy5Tmgwov6wBJpVOStdEO6W@clients",
            "fullname": "Bandar Alonezi 1234",
            "position": "Technical lead 1234",
            "gender": "Male",
            "age": "20"
        }
    ]
}
```

* `Create Employee` - create a new employee

```json
{
  "fullname": "Bandar Alonezi",
  "position": "Technical lead",
  "gender": "Male",
  "age": "99"
}
```

* `Update Employee` - update a employee data

return empty respone with 200 http code

* `Delete Employee` - delete a employee

return empty respone with 200 http code

* `Get photo URL` - upload photo of a employee.

```json
{
    "uploadUrl": "https://serverless-employees-db-bucket-bandar-dev.s3.eu-west-1.amazonaws.com/93b295a7-099f-41da-89fc-5871e6514736?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQTZK7WNS7TI6MGMS%2F20210501%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20210501T111131Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCWV1LXdlc3QtMSJIMEYCIQCxb6VhMHWWXG6UoO%2BYeH2ZqLIC8zHIKPq3n6TLdcuMrAIhALeqsCgXApMHlHPmwutr9nDz4lgB8F7RJu1AbEUtSuKeKvkBCKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMMDQyNTAyOTU5OTczIgzD6k0%2FzOOL5ZmJSFEqzQEzeVj9Oj6vPjf7P0Jal19dqgfCfvTXwd36zBy2I8%2FMIgqbPP5Up6MlDk%2B7FsaXuOtMW7EBQpsqekfpxE%2FScSWontxtpq5rcDnGnUbPN56k%2F5uWUMDyH1HOir5CvpT%2BvV8UoYP3x4Y9kmLUXpsv8VHOCsbI0MzO8jxZWh7aIqvfuKPPGAT7A2PkrAcYf3yaod7UmCGDXb6mX1odjzWtKiEfWGIm9MnF3%2Fm6MDrOpuhH75FSAmshM5BwzUF8t%2B%2FMEbeWCJALiMV2%2B%2FuWc0hOMOLutIQGOt8BKFAHtJ08ftPk7hlVI88B%2FC%2BE8r4XeTji6KoPblp7K1XHFCCba%2FhNcoN7LYDPZCHNiIjip1W95VDMUg5WTPkE2lXadjfaTr%2FODJq7fUvRtJy8DRJ6h561pnWs8ubd5jln1%2BdbN2k9KKLV82pyNKlnnlS458XFMkq0m22q%2Bg27%2BB9SXdE1rbjn8CMRQeAqptyAmfO9caj3Vks0O8v8NqAM4dIb9Q9%2FWXovfYNHIHO70bFg8CwPF4bOmOe2l5q%2BsmYAgyX4duJkwdUuUgzIeyiC%2Bq5Q5OhkFfOy1V3eHsWF8g%3D%3D&X-Amz-Signature=90273aea650650a50e8ea6d23b08b8a42d7579e2830f688345b142fe4da7c086&X-Amz-SignedHeaders=host"
}
```



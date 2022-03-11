import {apiOperations} from "../Constants/apiOperations";

export const Helpers = {
    PostRequest: function (url, headers, body) {
        return cy.ApiOperation(apiOperations.POST, url, headers, '', body)
    },
    GetRequest: function (url, headers) {
        return cy.ApiOperation(apiOperations.GET, url, headers, '','')
    },
    PutRequest: function (url, headers, body) {
        return cy.ApiOperation(apiOperations.PUT, url, headers, '', body)
    },
    DeleteRequest: function (url, headers) {
        return cy.ApiOperation(apiOperations.DELETE, url, headers,'', '')
    },
    FetchRequest: function (url, headers) {
        return cy.ApiOperation(apiOperations.FETCH, url, headers,'', '')
    }
}
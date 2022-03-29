public with sharing class DdareungiClass {
    @AuraEnabled

    public static map<string, Object> getData() {
        map<string, Object> data = new map<string, Object>();
        String strResponse = null;
        HttpRequest httpRequest = new HttpRequest();

        httpRequest.setEndpoint('http://openapi.seoul.go.kr:8088/sample/json/bikeList/1/5/');
        httpRequest.setMethod('GET');
        httpRequest.setHeader('Content-Type', 'application/json');

        try {
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpRequest);

            if(httpResponse.getStatusCode() == 200) {
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }
        } catch(Exception e) {
            throw e;
        }

        if(String.isNotBlank(strResponse)) {
            data = (map<string, Object>)JSON.deserializeUntyped(strResponse);
        }

        return data;
    }
}

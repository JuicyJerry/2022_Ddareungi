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

    
    // @AuraEnabled 
    // // public static Object[] getCalloutResponseData(String url){
    // public static String getCalloutResponseData(String url){
    //     map<string,Object> resultsMap=new map<string,Object>();
    //     String strResponse = null; 

    //     if (string.isNotBlank(url)) {
    //         HttpRequest req = new HttpRequest();
    //         req.setEndpoint(url);
    //         req.setMethod('GET');  

    //         try {
    //             Http h = new Http();
    //             HttpResponse res = h.send(req);

    //             if (res.getStatusCode() == 200) {
    //                 strResponse = res.getBody();
    //                 System.debug('response!! --> ' + strResponse);
    //             } else {
    //                 throw new CalloutException(res.getBody());
    //             }
    //         } catch (Exception e) {
    //             throw e;
    //         }
    //     }


    //     // if (String.isNotBlank(strResponse)) {
    //     //     resultsMap=JSON.deserializeUntyped(strResponse);
    //     //     System.debug('resultsMap  -->' + resultsMap);
    //     //     // return resultsMap;
    //     // } else {
    //     //     System.debug('undefined, try again!');
    //     //   }
          
    //       return strResponse;
    //       // return strResponse;
//     }
    
// }

public with sharing class DdareungiClass { 
    @AuraEnabled 
    // public static Object[] getCalloutResponseData(String url){
    public static String getCalloutResponseData(String url){
        map<string,Object> resultsMap=new map<string,Object>();
        String strResponse = null; 

        if (string.isNotBlank(url)) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint(url);
            req.setMethod('GET');  

            try {
                Http h = new Http();
                HttpResponse res = h.send(req);

                if (res.getStatusCode() == 200) {
                    strResponse = res.getBody();
                    System.debug('response!! --> ' + strResponse);
                } else {
                    throw new CalloutException(res.getBody());
                }
            } catch (Exception e) {
                throw e;
            }
        }


        // if (String.isNotBlank(strResponse)) {
        //     resultsMap=JSON.deserializeUntyped(strResponse);
        //     System.debug('resultsMap  -->' + resultsMap);
        //     // return resultsMap;
        // } else {
        //     System.debug('undefined, try again!');
        //   }
          
          return strResponse;
          // return strResponse;
    }
    
}

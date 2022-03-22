// with sharing : enforce sharing rules of the current user
// Apex code which executeAnonymous call, connect in apex always execute sharing rules
// Use shraing rules to extend sharing access to users in public groups, roles, or territories
public with sharing class DdareungiClass { 
    // this annotation enables client-and server-side access to an apex controller method (lightning components)
    @AuraEnabled 
    // 자바 list 안에 데이터가 아닌 객체 일때 정렬
    public static Map < String, Object > getCalloutResponseData(String url) {
        // public static Map < String, Object > getCalloutResponseData(String url) {
        Http h = new Http();

        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');

        HttpResponse res = h.send(req);

        // console.log('response:--> ' + res.getBody());
        System.debug('response:--> ' + res.getBody());

        Map < String, Object > resultsMap = (Map < String, Object > ) JSON.deserializeUntyped(res.getBody());
        system.debug('resultsMap-->' + resultsMap);

        return resultsMap;
    }
    
}

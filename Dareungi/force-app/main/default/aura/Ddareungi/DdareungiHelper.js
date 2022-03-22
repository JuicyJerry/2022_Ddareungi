({
    getResponse : function(component, apiKey) {
        let action = component.get("c.getCalloutResponseData");
    
        action.setParams({
            "url": "https://api.sampleapis.com/coffee/hot",
            // 'url': 'http://openapi.seoul.go.kr:8088/sample/json/bikeList/1/5/',
            // "url": `http://openapi.seoul.go.kr:8088/${apiKey}/json/bikeList/1/5/`,
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            console.log(component.isValid(), state);

            if (component.isValid() && state === "SUCCESS") {
                console.log('success');
                
                component.set("v.response", response.getReturnValue());
                
                let getAllRates = component.get("v.response")['rates'];
                let DataList = [];
                
                for (let key in getAllRates) {
                    DataList.push(key + ' = ' + getAllRates[key]);
                }
                
                component.set("v.ListOfCurrency", DataList);
            } else {
                console.log("failure");
            }
        });

        $A.enqueueAction(action);
    }
})
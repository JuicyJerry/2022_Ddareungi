({
    getResponse : function(component, apiKey) {
        console.log('check point1');
        let action = component.get("c.getCalloutResponseData");
        
        console.log('check point2');
        action.setParams({
            "url": 'http://openapi.seoul.go.kr:8088/' + apiKey + '/json/bikeList/1/5/',
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.response", response.getReturnValue());

                let getAllRates = component.get("v.response")['rates'];
                let DataList = [];

                for (let key in getAllRates) {
                    DataList.push(key + ' = ' + getAllRates[key]);
                }

                component.set("v.ListOfCurrency", DataList);
            }
        });

        $A.enqueueAction(action);
    }
})
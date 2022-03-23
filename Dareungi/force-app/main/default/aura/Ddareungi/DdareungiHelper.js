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
            // console.log("isValid & state: ", component.isValid(), state);

            if (component.isValid() && state === "SUCCESS") {
                let returnValues = [];
                for (let t of JSON.parse(response.getReturnValue())) {
                    console.log(t);

                    if (t['title'] !== '1') {
                        returnValues.push(t['title']);
                    }
                }
                component.set("v.ListOfData", (returnValues));
                
                let getAllData = component.get("v.ListOfData");
                let DataList = [];
                for (let key in getAllData) {
                    console.log("key: ", key);
                    DataList.push(key + ' = ' + getAllData[key]);
                }
                
                component.set("v.ListOfCurrency", DataList);
            } else {
                console.log("failure");
            }
        });

        $A.enqueueAction(action);
    }
})
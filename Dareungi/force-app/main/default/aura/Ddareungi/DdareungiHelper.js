({
    getResponse : function(component, apiKey) {
        let action = component.get("c.getCalloutResponseData");
    
        action.setParams({
            // "url": "https://api.sampleapis.com/coffee/hot",
            // 'url': 'http://openapi.seoul.go.kr:8088/sample/json/bikeList/1/5/',
            "url": `http://openapi.seoul.go.kr:8088/${apiKey}/json/bikeList/1/5/`,
            // 'url': 'http://openapi.seoul.go.kr:8088/sample/xml/bikeList/1/5/',
        });

        action.setCallback(this, function(response) {
            let state = response.getState();
            console.log("state: " + state);
            
            if (component.isValid() && state === "SUCCESS") {
                // console.log("success! :  " + response.getReturnValue()["rentBikeStatus"]["row"]);
                
                let returnValues = [];
                let stationName = [];
                let rawData = ((JSON.parse([response.getReturnValue()])["rentBikeStatus"]["row"]));

                for (let target of rawData) {
                    // console.log("target: " + JSON.stringify(JSON.parse(target)["rentBikeStatus"]["row"]) + '\n\n\n\n\n\n\n\n' + cnt);
                    // console.log(target);
                    returnValues.push(JSON.stringify(target));
                    stationName.push((target["stationName"]));
                    // rawData["stationName"]
                }
                component.set("v.ListOfData", (returnValues));
                component.set("v.ListOfStations", stationName);
                
                // let DataList = [];
                // let getAllData = component.get("v.ListOfData");
                // for (let key in getAllData) {
                //     DataList.push(key + ' = ' + getAllData[key]);
                // }
                // component.set("v.ListOfCurrency", DataList);
            } else {
                console.log("failure");
            }
        });

        $A.enqueueAction(action);
    }
})



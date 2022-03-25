({
    getResponse : function(component, apiKey) {
        let action = component.get("c.getCalloutResponseData");
        let keyword = component.get("v.textValue"); 

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
                // let returnValues = [];
                let findKeywordData = [];
                let rawData = ((JSON.parse([response.getReturnValue()])["rentBikeStatus"]["row"]));

                for (let target of rawData) {
                    // console.log("target: " + JSON.stringify(JSON.parse(target)["rentBikeStatus"]["row"]) + '\n\n\n\n\n\n\n\n' + cnt);
                    // returnValues.push(JSON.stringify(targ    et));
                    // const regex = /`${keyword}`;
                    // const regex = /`${keyword}`/g;
                    const getKeyword = target["stationName"].match(keyword);
                    console.log(target["stationName"], getKeyword, typeof getKeyword)

                    if (typeof getKeyword === "object") {
                        console.log("해당하는 키워드 발견");
                        findKeywordData.push((target["stationName"]));
                    } else if (typeof getKeyword !== "string") {
                        console.log("string type 이 아닙니다");
                    } else {
                        console.log("이것 어떤 경우일까요?");
                        console.log("검색 결과가 없습니다.");
                        component.set("v.ListOfStations", "검색 결과가 없습니다.");
                    }
                }
                // component.set("v.ListOfData", (returnValues));
                // component.set("v.ListOfData", findKeywordData);
                component.set("v.ListOfStations", findKeywordData);
                
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



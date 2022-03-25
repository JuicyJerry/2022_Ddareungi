// ({
//     getResponse : function(component, apiKey) {
//         let action = component.get("c.getCalloutResponseData");
//         let keyword = component.get("v.textValue"); 

//         action.setParams({
//             // "url": "https://api.sampleapis.com/coffee/hot",
//             // 'url': 'http://openapi.seoul.go.kr:8088/sample/json/bikeList/1/5/',
//             "url": `http://openapi.seoul.go.kr:8088/${apiKey}/json/bikeList/1/5/`,
//             // 'url': 'http://openapi.seoul.go.kr:8088/sample/xml/bikeList/1/5/',
//         });

//         action.setCallback(this, function(response) {
//             let state = response.getState();
//             console.log("state: " + state);
            
//             if (component.isValid() && state === "SUCCESS") {
//                 // let returnValues = [];
//                 let rawData = ((JSON.parse([response.getReturnValue()])["rentBikeStatus"]["row"]));
//                 // let rawData1 = ((JSON.parse([response.getReturnValue()])));                // let rawData1 = ((JSON.parse([response.getReturnValue()])));
//                 let rawData1 = response.getReturnValue();

//                 let findKeywordData = [];
                
//                 let ractTotCntValueInData = [];
//                 let stationNameValueInData = [];
//                 let parkingBikeTotCntValueInData = [];
//                 let sharedValueInData = [];
//                 let stationLatitudeValueInData = [];
//                 let stationLongitudeValueInData = [];
//                 let stationIdValueInData = [];

//                 for (let target of rawData) {
//                     // console.log("target: " + JSON.stringify(JSON.parse(target)["rentBikeStatus"]["row"]) + '\n\n\n\n\n\n\n\n' + cnt);
//                     // returnValues.push(JSON.stringify(targ    et));
//                     // const regex = /`${keyword}`;
//                     // const regex = /`${keyword}`/g;
//                     const getKeyword = target["stationName"].match(keyword);

//                     // .split(" ").filter((el) => el === keyword);
//                     console.log("target['stationName']:  " + target["stationName"] + '\n', "getKeyword:  " + getKeyword, + '\n\n' + typeof getKeyword)

//                     if (String(getKeyword) === keyword) {
//                         console.log("해당하는 키워드 발견");
//                         findKeywordData.push(JSON.stringify(target));

//                         ractTotCntValueInData.push(JSON.stringify(target["rackTotCnt"]));
//                         stationNameValueInData.push(JSON.stringify(target["stationName"]));
//                         parkingBikeTotCntValueInData.push(JSON.stringify(target["parkingBikeTotCnt"]));
//                         sharedValueInData.push(JSON.stringify(target["shared"]));
//                         stationLatitudeValueInData.push(JSON.stringify(target["stationLatitude"]));
//                         stationLongitudeValueInData.push(JSON.stringify(target["stationLongitude"]));
//                         stationIdValueInData.push(JSON.stringify(target["stationId"]));

//                     } else {
//                         console.log(`${keyword}에 대한 내용이 없습니다.`);
//                         component.set("v.ListOfData", `${keyword}에 대한 내용이 없습니다.`);
//                     }
//                 }
//                 // component.set("v.ListOfData", (returnValues));
//                 // component.set("v.ListOfData", findKeywordData);

//                 console.log("findKeywordData:  " + findKeywordData);
//                 // console.log("rawData1:  " + JSON.stringify(rawData1['rentBikeStatus']['row']));
//                 // component.set("v.ListOfData", [JSON.stringify(rawData1["rentBikeStatus"]["row"])]);
//                 component.set("v.ListOfData", [JSON.parse(findKeywordData)]);
//                 // component.set("v.ListOfData", findKeywordData);

//                 component.set("v.ractTotCntValueInData", ractTotCntValueInData);
//                 component.set("v.stationNameValueInData", stationNameValueInData);
//                 component.set("v.parkingBikeTotCntValueInData", parkingBikeTotCntValueInData);
//                 component.set("v.sharedValueInData", sharedValueInData);
//                 component.set("v.stationLatitudeValueInData", stationLatitudeValueInData);
//                 component.set("v.stationLongitudeValueInData", stationLongitudeValueInData);
//                 component.set("v.stationIdValueInData", stationIdValueInData);
                
//                 // let DataList = [];
//                 // let getAllData = component.get("v.ListOfData");
//                 // for (let key in getAllData) {
//                 //     DataList.push(key + ' = ' + getAllData[key]);
//                 // }
//                 // component.set("v.ListOfCurrency", DataList);
//             } else {
//                 console.log("failure");
//             }
//         });

//         $A.enqueueAction(action);
//     }
// })


({
    getResponse: function(component, event, help) {
        let action = component.get("c.getData");
        let keyword = component.get("v.textValue"); 
        
        // action.setParams({
        //     "url": `http://openapi.seoul.go.kr:8088/sample/json/bikeList/1/5/`,
        // })

        action.setCallback(this, function(response) {
            let data = response.getReturnValue();
            let findKeywordData = [];
            
            let state = response.getState();
            console.log("state: " + state);
            console.log(data.rentBikeStatus.row);
            
            if (component.isValid() && state === "SUCCESS") {
                for (let target of data.rentBikeStatus.row) {
                    const getKeyword = target["stationName"].match(keyword);
                    console.log(getKeyword);

                    if (String(getKeyword) === keyword) {
                        console.log("해당하는 키워드 발견");
                        findKeywordData.push(target);
                    }   else {
                        console.log(`${keyword}에 대한 내용이 아닙니다.`);
                        component.set("v.ListOfData", `${keyword}에 대한 내용이 없습니다.`);
                    }
                    component.set("v.ListOfData", findKeywordData);
                }   
            }   else {
                console.log("state Error");
            }
        }
    )

        $A.enqueueAction(action);
    } 
})
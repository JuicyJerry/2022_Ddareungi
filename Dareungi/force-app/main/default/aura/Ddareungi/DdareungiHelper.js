({
    getResponse: function(component, event, help) {
        let request = component.get("c.getData");
        let keyword = component.get("v.textValue"); 
        
        request.setCallback(this, function(response) {
            let data = response.getReturnValue();
            let state = response.getState();
            let findKeywordData = [];
            
            if (component.isValid() && state === "SUCCESS") {
                for (let target of data.rentBikeStatus.row) {
                    const getKeyword = target["stationName"].match(keyword);

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
        })
        $A.enqueueAction(action);
    }
})
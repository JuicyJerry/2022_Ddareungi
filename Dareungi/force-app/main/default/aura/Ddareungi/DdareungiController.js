({
    handleClick : function(component, event, helper) {
        let textValue = component.get("{!v.textValue}");
        console.log(`${textValue} data is coming!`);
        // alert("click!")
        // alert(`"${textValue}" 을 검색 중입니다.`);

        let apiKey = '4251526e676c6a683639437376564c';
        helper.getResponse(component, apiKey);
    },

    handleChange: function(component, event, helper) {
        // onchange 값 받아오기!!!!!
        let findValue = component.find("enter-search").get("v.value");
        console.log(findValue);
        
        // let listValue = [];
        // listValue.reduce((acc, cur) => {
        //     console.log(cur.get("v"));
        // })
        
        component.set("v.textValue", findValue);
        //  component.get("v.textvalue");
        // console.log("textValue: " + textValue);
    },
    
    handleFocus: function(component, event, helper) {
        console.log("Input has recieved the focus");
        component.set("v.textValue", null);
    },
    
    showSpinner: function(component, event, helper) {
        component.set("v.spinner", false);

        setTimeout(() => {
            console.log("counting!");
        }, 2000)
        
        this.hideSpinner();
    },

    hideSpinner: function(component, event, helper) {
        component.set("v.spinner", true);
    }
})
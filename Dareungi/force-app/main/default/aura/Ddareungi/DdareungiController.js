({
    handleClick : function(component, event, helper) {
        console.log("Get data button is clicked");

        let apiKey = '4251526e676c6a683639437376564c';
        
        helper.getResponse(component, apiKey);
    },

    handleChange: function(component, event, helper) {
        // onchange 값 받아오기!!!!!
        console.log(event.target.value);
    },

    handleClickBtn: function(component, event, helper) {
        alert("click!")
    }    
})
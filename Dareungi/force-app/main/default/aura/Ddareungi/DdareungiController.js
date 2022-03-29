({
    handleClick : function(component, event, helper) {
        let textValue = component.get("{!v.textValue}");
        let apiKey = '4251526e676c6a683639437376564c';
        helper.getResponse(component, apiKey);
    },
    
    handleChange: function(component, event, helper) {
        let findValue = component.find("enter-search").get("v.value");
        component.set("v.textValue", findValue);
    },
    
    handleFocus: function(component, event, helper) {
        component.set("v.textValue", null);
    },

    showSpinner: function(component, event, helper) {
        component.set("v.spinner", true); 
    },
        
    hideSpinner : function(component,event,helper){
        component.set("v.spinner", false);
    }
})
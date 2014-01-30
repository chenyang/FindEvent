package wsSem.logic;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import module.business.BusinessModelManip;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import wsSem.facade.QueryEndpointGenerator;
import wsSem.model.JsonBusinessObject;

public class AnnotationLogic {
	
	public List<JsonBusinessObject> getSampleBusinessObjects(){
		List<JsonBusinessObject> listeBusiness = new ArrayList<JsonBusinessObject>();
		listeBusiness =  QueryEndpointGenerator.getSampleBusinessEvent();
		return listeBusiness;
	}
	
	public List<JsonBusinessObject> getBusinessByRequest(String sparql){
		List<JsonBusinessObject> listeBusiness = new ArrayList<JsonBusinessObject>();
		listeBusiness = QueryEndpointGenerator.getBusinessByRequest(sparql);
		return listeBusiness;
	}
	
	public void addAnnotation(String str_jsonobj) throws JsonParseException, JsonMappingException, IOException{
		ObjectMapper mapper = new ObjectMapper();
		JsonBusinessObject obj = mapper.readValue(str_jsonobj, JsonBusinessObject.class);
		BusinessModelManip.addBusinessObject(obj);
	}
}


package wsSem.logic;

import java.util.ArrayList;
import java.util.List;

import wsSem.facade.QueryEndpointGenerator;
import wsSem.model.JsonEvent;
import exception.WebServiceException;

public class EventLogic {
	public List<JsonEvent> getAllEvenements(String lat, String lgt, int radius, String city, String genre) throws WebServiceException{
		List<JsonEvent> eventList = new ArrayList<JsonEvent>();
		eventList=QueryEndpointGenerator.getAllEvents(lat, lgt, radius, city, genre);
		return eventList;
	}
}

package com.example.locations;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.locations.DAO.LocationDAO;
import com.example.locations.entity.LocationEntity;

import lombok.val;

@RestController
public class LocationController {

		
		@Autowired
		private LocationDAO locationDAO;

		@CrossOrigin(origins = "http://localhost:4200")
		@GetMapping("/location")
		public Iterable<LocationEntity> getLocations(@RequestParam(value = "name", defaultValue = "World") String name) {
			List<LocationEntity> locations = locationDAO.findAll();
			for (LocationEntity locationEntity : locations) {
				System.out.println(locationEntity.getName());
			}
			return locations;
		}
		
		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/location")
		public LocationEntity saveLocation(@RequestBody LocationEntity location) {
			System.out.println("LOCATION"+location.getName());
			return locationDAO.save(location);
		}
}

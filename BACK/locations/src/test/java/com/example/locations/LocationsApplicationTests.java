package com.example.locations;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.locations.DAO.LocationDAO;
import com.example.locations.entity.LocationEntity;

@RunWith(SpringRunner.class)
@SpringBootTest
class LocationsApplicationTests {

	
	@Autowired
	private LocationDAO repository;
	
	@Test
	void testSaveLocations() {
		LocationEntity location = new LocationEntity();
		location.setId(0);
		location.setName("Alemania");
		location.setArea(234);
		location.setParent(null);
		repository.save(location);
		assertThat(location.getId()).isNotNull();
	}
	
	@Test
	void testGetAllLocations() {
		List<LocationEntity> locations = repository.findAll();
		assertThat(locations.size()).isNotNull();
	}

}

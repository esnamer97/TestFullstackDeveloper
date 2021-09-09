package com.example.locations.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.locations.entity.LocationEntity;

public interface LocationDAO extends CrudRepository<LocationEntity, Integer>{
	List<LocationEntity> findAll();
}

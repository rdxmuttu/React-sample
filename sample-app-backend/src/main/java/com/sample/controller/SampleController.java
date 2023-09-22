package com.sample.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.model.SampleEntity;

@RestController
@RequestMapping("/api/sample")
@CrossOrigin(origins = "*")
public class SampleController {
	List<SampleEntity> entityList = new ArrayList<>();
	
	
	@GetMapping("/getall")
	public List<SampleEntity> getAllEntity() {
	return entityList;
	}
	
	@PostMapping("/add")
	public SampleEntity addEntity(@RequestBody SampleEntity entity) {
		entityList.add(entity);
		return entity;
		
	}
}

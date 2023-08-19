package com.sample.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SampleEntity {
	private int Id;
	private String userName;
	private String mailId;

}

package com.dtcc.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dtcc.model.ShipProduct;

@RestController
@RequestMapping("/api/v2/")
public class ShipProductController {
	
	

	@CrossOrigin("http://localhost:8808")
	@RequestMapping(value="products", method=RequestMethod.GET)
	public List<ShipProduct> getAll(){
		return ShipProducts.getAll();
	}
	
	
	@RequestMapping(value="product/{id}",method=RequestMethod.GET)
	public ShipProduct get(@PathVariable String id){
		return ShipProducts.getProduct(Integer.parseInt(id));
	}
	
}

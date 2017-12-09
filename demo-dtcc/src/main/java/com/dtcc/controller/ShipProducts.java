package com.dtcc.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dtcc.model.ShipProduct;

public class ShipProducts {
	
	public static Map<Integer, ShipProduct> products = new HashMap<>();
	
	static{
		ShipProduct p1 = new ShipProduct(1,"Car","Bentely 6611");
		products.put(1, p1);
		ShipProduct p2 = new ShipProduct(2,"Car","Ferrari 3333");
		products.put(2, p2);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static List<ShipProduct> getAll(){
		return new ArrayList(products.values());
	}
	
	public static ShipProduct getProduct(int id){
		return products.get(id);
	}
	
	public static void addProduct(ShipProduct product){
		products.put(product.getProductId(), product);
	}
}

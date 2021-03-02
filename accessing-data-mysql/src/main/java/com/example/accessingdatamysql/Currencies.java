package com.example.accessingdatamysql;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
 
@Entity
public class Currencies {
	@Id
	@Column(name = "Unique_date")
	public String unique_date;
	
	@Column(name = "USD")
	public float USD;
	
	@Column(name = "INR")
	public float INR;
	
	@Column(name = "EUR")
	public float EUR;
	
	@Column(name = "GBP")
	public float GBP;
	
	@Column(name = "CAD")
	public float CAD;
	
	@Column(name = "JPY")
	public float JPY;
	
	@Column(name = "CNY")
	public float CNY;
	
	public String getUnique_date() {
		return unique_date;
	}

	public void setUnique_date(String unique_date) {
		this.unique_date = unique_date;
	}
	
	
	public float getUSD() {
		return USD;
	}

	public void setUSD(float USD) {
		this.USD = USD;
	}
	
	public float getINR() {
		return INR;
	}

	public void setINR(float INR) {
		this.INR = INR;
	}
	
	public float getEUR() {
		return EUR;
	}

	public void setEUR(float EUR) {
		this.EUR = EUR;
	}
	
	public float getGBP() {
		return GBP;
	}

	public void setGBP(float GBP) {
		this.GBP = GBP;
	}
	
	public float getCAD() {
		return CAD;
	}

	public void setCAD(float CAD) {
		this.CAD = CAD;
	}
	
	public float getJPY() {
		return JPY;
	}

	public void setJPY(float JPY) {
		this.JPY = JPY;
	}
	
	public float getCNY() {
		return CNY;
	}

	public void setCNY(float CNY) {
		this.CNY = CNY;
	}
}

package com.example.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;
import com.example.accessingdatamysql.Currencies;

public interface CurrenciesRepository extends CrudRepository<Currencies, String>{

}

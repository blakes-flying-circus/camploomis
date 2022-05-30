package com.camploomis.services

import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import com.camploomis.services.common.Beer

@Controller("/hello") //
class HelloController {

    @Get(produces = [MediaType.TEXT_PLAIN]) //
    fun index(): String {
        return "Hello World" //
    }
}
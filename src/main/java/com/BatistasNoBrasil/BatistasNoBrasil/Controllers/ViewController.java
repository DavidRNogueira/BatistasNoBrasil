package com.BatistasNoBrasil.BatistasNoBrasil.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

        @GetMapping(value={"/", "/{id}"})
        public String toProject(){
            return "../static/build/index";
        }
    }


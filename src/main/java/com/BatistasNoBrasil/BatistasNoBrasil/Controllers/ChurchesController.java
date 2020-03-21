package com.BatistasNoBrasil.BatistasNoBrasil.Controllers;

import com.BatistasNoBrasil.BatistasNoBrasil.Dto.ChurchDto;
import com.BatistasNoBrasil.BatistasNoBrasil.Service.ChurchService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChurchesController {

    private ChurchService churchService;

    public ChurchesController (ChurchService churchService){
        this.churchService = churchService;
    }

    @GetMapping("/igrejas")
        public ChurchDto getChurches(@RequestParam(name="state") String state) {
            ChurchDto church = churchService.getChurchesByState(state);
            return church;
        }

}



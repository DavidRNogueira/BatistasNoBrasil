package com.BatistasNoBrasil.BatistasNoBrasil.Controllers;

import com.BatistasNoBrasil.BatistasNoBrasil.Dto.ChurchDto;
import com.BatistasNoBrasil.BatistasNoBrasil.Service.ChurchService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChurchesController {

    private ChurchService churchService;

    public ChurchesController (ChurchService churchService){
        this.churchService = churchService;
    }

    @GetMapping("/igrejas")
        public List<ChurchDto> getChurchesByState(@RequestParam(name="state") String state) {
            System.out.println(state);
            List<ChurchDto> churches = churchService.getChurchesByState(state);
            return churches;
        }

     @GetMapping("/all-churches")
        public List<ChurchDto> getAllChurches () {
        List<ChurchDto> allChurches = churchService.getAllChurches();
        return allChurches;
     }

     @GetMapping("/church-by-id")
        public ChurchDto getChurchById (@RequestParam(name="id") String id){
        ChurchDto church = churchService.getChurchById(id);
        return church;
     }
}



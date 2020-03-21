package com.BatistasNoBrasil.BatistasNoBrasil.Service;

import com.BatistasNoBrasil.BatistasNoBrasil.Dao.ChurchDao;
import com.BatistasNoBrasil.BatistasNoBrasil.Dto.ChurchDto;
import com.BatistasNoBrasil.BatistasNoBrasil.Entity.ChurchEntity;
import org.springframework.stereotype.Service;

@Service
public class ChurchService {

    private ChurchDao churchDao;

    public ChurchService ( ChurchDao churchDao){
        this.churchDao = churchDao;
    }

    public ChurchDto getChurchesByState (String state){
        ChurchEntity churchEntity = churchDao.getChurchByState(state);

        ChurchDto church = new ChurchDto(
                churchEntity.getName(),
                churchEntity.getAddress(),
                churchEntity.getCity(),
                churchEntity.getState(),
                churchEntity.getZip(),
                churchEntity.getPastor(),
                churchEntity.getDescription(),
                churchEntity.getEmail(),
                churchEntity.getPhone(),
                churchEntity.getImage(),
                churchEntity.getId(),
                churchEntity.getWebsite()
                );
        return church;
    }
}

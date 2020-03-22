package com.BatistasNoBrasil.BatistasNoBrasil.Service;

import com.BatistasNoBrasil.BatistasNoBrasil.Dao.ChurchDao;
import com.BatistasNoBrasil.BatistasNoBrasil.Dto.ChurchDto;
import com.BatistasNoBrasil.BatistasNoBrasil.Entity.ChurchEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChurchService {

    private ChurchDao churchDao;

    public ChurchService(ChurchDao churchDao) {
        this.churchDao = churchDao;
    }

    public List<ChurchDto> getChurchesByState(String state) {
        List<ChurchEntity> churches = churchDao.getChurches();

        List<ChurchEntity> churchesByState = churches.stream()
                .filter(church -> church.getState().equals(state))
                .collect(Collectors.toList());

        List<ChurchDto> dtoList = new ArrayList<ChurchDto>();

        for (int i = 0; i < churchesByState.size(); i++) {
            ChurchEntity currentChurch = churchesByState.get(i);
            ChurchDto dto = new ChurchDto(
                    currentChurch.getName(),
                    currentChurch.getAddress(),
                    currentChurch.getCity(),
                    currentChurch.getState(),
                    currentChurch.getZip(),
                    currentChurch.getPastor(),
                    currentChurch.getDescription(),
                    currentChurch.getEmail(),
                    currentChurch.getPhone(),
                    currentChurch.getImage(),
                    currentChurch.getId(),
                    currentChurch.getWebsite()
            );
            dtoList.add(dto);
        }

        return dtoList;
    }

    public List<ChurchDto> getAllChurches() {
        List<ChurchEntity> churches = churchDao.getChurches();
        List<ChurchDto> dtoList = new ArrayList<ChurchDto>();

        for (int i = 0; i < churches.size(); i++) {
            ChurchEntity currentChurch = churches.get(i);
            ChurchDto dto = new ChurchDto(
                    currentChurch.getName(),
                    currentChurch.getAddress(),
                    currentChurch.getCity(),
                    currentChurch.getState(),
                    currentChurch.getZip(),
                    currentChurch.getPastor(),
                    currentChurch.getDescription(),
                    currentChurch.getEmail(),
                    currentChurch.getPhone(),
                    currentChurch.getImage(),
                    currentChurch.getId(),
                    currentChurch.getWebsite()
            );
            dtoList.add(dto);
        }
        return dtoList;
    }

    public ChurchDto getChurchById (String id) {
        ChurchEntity church = churchDao.getChurchById(id);
        ChurchDto churchDto = new ChurchDto(
                church.getName(),
                church.getAddress(),
                church.getCity(),
                church.getState(),
                church.getZip(),
                church.getPastor(),
                church.getDescription(),
                church.getEmail(),
                church.getPhone(),
                church.getImage(),
                church.getId(),
                church.getWebsite()
        );
        return churchDto;
    }
}
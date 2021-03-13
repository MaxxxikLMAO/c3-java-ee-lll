package cz.maxikek.netitletovatelne;


import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;

    @ApplicationScoped
    public class GameManager {

        private ArrayList<GameDetail> gameDetailList = new ArrayList<>();
        public ArrayList<GameDetail> getGameList(){
            return gameDetailList;
        }
        public boolean create(GameDetail gameDetail) {

            int newId = (int) (Math.random()*(100 +1));

            if (gameCheck(newId)){
                gameDetail.setId(newId);
                gameDetailList.add(gameDetail);
            }
            return true;
        }

        public GameDetail getGame (int id){
            return  gameDetailList.stream()
                    .filter(gameDetailStream -> id == gameDetailStream.getId())
                    .findAny()
                    .orElse(null);
        }

        public boolean removeGame(int id){
            return  gameDetailList.remove(getGame(id));
        }

        public boolean gameCheck(int id) {
            for (int i = 0; i < gameDetailList.size(); i++){
                if (id != gameDetailList.get(i).id) {
                    return false;
                }
            } return true;
        }

        public boolean editGame(int id, GameDetail gameDetail){
            if(gameCheck(id)){
                gameDetailList.add(gameDetail);
                return true;
            } else {
                return false;
            }
        }

    }

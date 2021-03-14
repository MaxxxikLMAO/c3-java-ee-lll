package cz.maxikek.netitletovatelne;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;

    @ApplicationScoped
    public class GameManager {

        int IDnum = 0;
        private ArrayList<GameDetail> games = new ArrayList<>();
        public ArrayList<GameDetail> getGames(){
            return games;
        }
        public boolean create(GameDetail game) {

            this.IDnum++;
            int newId = this.IDnum;

            game.setId(newId);
            games.add(game);

            return true;
        }
        public GameDetail getGame (int id){
            return  games.stream()
                    .filter(gameStream -> id == gameStream.getId())
                    .findAny()
                    .orElse(null);
        }

        public boolean gameCheck(int id) {
            for (int i = 0; i < games.size(); i++){
                if (id != games.get(i).id) {
                    return false;
                }
            } return true;
        }

        public boolean editGame(int id, GameDetail game){
            if(gameCheck(id)){
                games.add(game);
                return true;
            } else {
                return false;
            }
        }
        public boolean removeGame(int id){
            return  games.remove(getGame(id));
        }

    }

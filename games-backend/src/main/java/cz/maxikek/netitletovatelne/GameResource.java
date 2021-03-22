package cz.maxikek.netitletovatelne;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Produces(MediaType.APPLICATION_JSON)
@Path("games")

public class GameResource {

    @Inject
    private GameManager manager;
    @Inject
    private CurrentUserManager currentUserManager;
    @GET
    public Response getAll() {
        if(currentUserManager.user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        return Response.ok(manager.getGames()).build();
    }
    @GET
    @Path("{id}")
    public Response getGame(@PathParam("id") int id) {
        if(currentUserManager.user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        return Response.ok(manager.getGame(id)).build();
    }

    @POST
    public Response createGame(GameDetail gameDetail){
        if(currentUserManager.user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        if(!manager.create(gameDetail))
            return Response.status(400).build();
        return Response.ok(gameDetail).build();
    }

    @PUT
    @Path("{id}")
    public Response editGame(@PathParam("id") int id, GameDetail gameDetail) {
        if(currentUserManager.user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        if(manager.editGame(id, gameDetail)) {
            return Response.ok(gameDetail).build();
        }
        else return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @DELETE
    @Path("{id}")
    public Response eraseGame(@PathParam("id") int id) {
        if(currentUserManager.user == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        if(manager.removeGame(id)){
            return Response.ok("Game removed").build();
        } else {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

}

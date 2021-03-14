package cz.maxikek.netitletovatelne;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;


@Path("user")
@Produces(MediaType.APPLICATION_JSON)
public class UsersResource {
    @Inject
    private UsersManager manager;

    public static List<User> names = new ArrayList<User>();

    public static boolean userExistsByUsername(String username) {
        for(int i = 0; i < names.size(); i++) {
            if(username.equals(names.get(i).getUsername())) {
                return true;
            }
        }
        return false;
    }

    @POST
    @Path("register")
    public Response createUser(
            @FormParam("username") String username,
            @FormParam("password") String password
    ) {
        User user = new User(username, password);
        if(userExistsByUsername(username)) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        names.add(user);
        return Response.ok(user).build();
    }

    @POST
    @Path("login")
    public Response loginUser(@FormParam("username") String username, @FormParam("password") String password) {
        for(int x = 0; x < names.size(); x++) {
            User user = names.get(x);
            System.out.println(user.username);
            System.out.println(user.password);
            if (user.username.equals(username) && user.password.equals(password)) {
                manager.user = user;
                return Response.ok("User is logged").build();
            }

        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @GET
    public Response getLoggedUser() {
        return  Response.ok(manager.user).build();
    }

}

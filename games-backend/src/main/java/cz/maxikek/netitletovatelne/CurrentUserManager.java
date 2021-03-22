package cz.maxikek.netitletovatelne;

import javax.enterprise.context.SessionScoped;
import java.io.Serializable;

@SessionScoped
public class CurrentUserManager implements Serializable {
    User user = null;
}

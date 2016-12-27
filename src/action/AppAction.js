/**
 * Created by CAOBIN on 2016/12/27.
 */
import 'rxjs';
export const PING = 'PING';
export const PONG = 'PONG';

export const ping = () => ({ type: PING });

export const pingEpic = action$ =>
    action$.ofType(PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: PONG });
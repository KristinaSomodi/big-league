import { Player } from "../types/Player";
import { BaseService } from "./baseService";

export default class PlayersService extends BaseService {
  //get players

  async getPlayers(limit: number, sortOrder: string): Promise<Player[]> {
    const res = await this.instance.get(
      `/players?_sort=name&_limit=${limit}&_order=${sortOrder}`
    );
    return res.data;
  }

  async getPlayer(playerId: string) {
    const res = await this.instance.get(`/players/${playerId}`);
    return res.data;
  }

  //post player

  async postPlayer(playerData: Player) {
    const res = await this.instance.post(`players`, playerData);
    return res;
  }
}

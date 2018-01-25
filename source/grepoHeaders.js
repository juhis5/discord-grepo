module.exports = {
   playersHeaders : ['id','name','allianceId','points', 'rank','towns'],
   alliancesHeader : ['id', 'name', 'points', 'towns', 'members', 'rank'],
}

$id, $name, $alliance_id, $points, $rank, $towns

http://en1.grepolis.com/data/alliances.txt.gz


http://en1.grepolis.com/data/towns.txt.gz
$id, $player_id, $name, $island_x, $island_y, $number_on_island, $points

http://en1.grepolis.com/data/islands.txt.gz
$id, $x, $y, $island_type, $available_towns

http://en1.grepolis.com/data/player_kills_all.txt.gz
$rank, $player_id, $points

http://en1.grepolis.com/data/player_kills_att.txt.gz
$rank, $player_id, $points

http://en1.grepolis.com/data/player_kills_def.txt.gz
$rank, $player_id, $points

http://en1.grepolis.com/data/alliance_kills_all.txt.gz
$rank, $alliance_id, $points

http://en1.grepolis.com/data/alliance_kills_att.txt.gz
$rank, $alliance_id, $points

http://en1.grepolis.com/data/alliance_kills_def.txt.gz
$rank, $alliance_id, $points

http://en1.grepolis.com/data/conquers.txt.gz
$town_id, $time, $new_player_id, $old_player_id, $new_ally_id, $old_ally_id, $town_points

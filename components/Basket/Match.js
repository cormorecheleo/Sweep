import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './Style';
import AnimateNumber from 'react-native-countup';
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements';

export default function Match({ route }) {
    const players = route.params;
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);
    const [canScore, setCanScore] = useState(true);
    const [run, setRun] = useState(true);

    function TeamList(nb, teamNumber) {
        if (nb == 3) {
            if (teamNumber == 1) {
                return (
                    <>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[0].p1number} </Text><Text style={styles.player}>{players[0].p1name}</Text>
                        </View>
                        <Text>{players[0].p1pos}</Text>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[0].p2number} </Text><Text style={styles.player}>{players[0].p2name}</Text>
                        </View>
                        <Text>{players[0].p2pos}</Text>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[0].p3number} </Text><Text style={styles.player}>{players[0].p3name}</Text>
                        </View>
                        <Text>{players[0].p3pos}</Text>
                    </>
                )
            } else if (teamNumber == 2) {
                return (
                    <>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[1].p4number} </Text><Text style={styles.player}>{players[1].p4name}</Text>
                        </View>
                        <Text>{players[1].p4pos}</Text>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[1].p5number} </Text><Text style={styles.player}>{players[1].p5name}</Text>
                        </View>
                        <Text>{players[1].p5pos}</Text>
                        <View style={styles.row}>
                            <Text style={styles.number}>{players[1].p6number} </Text><Text style={styles.player}>{players[1].p6name}</Text>
                        </View>
                        <Text>{players[1].p6pos}</Text>
                    </>
                )
            }

        } else if (nb == 5) {
            if (teamNumber == 1) {
                return (
                    <>
                        <Text style={styles.player}>{players[0].p1name}</Text>
                        <Text style={styles.player}>{players[0].p2name}</Text>
                        <Text style={styles.player}>{players[0].p3name}</Text>
                        <Text style={styles.player}>{players[0].p4name}</Text>
                        <Text style={styles.player}>{players[0].p5name}</Text>
                    </>
                )
            } else if (teamNumber == 2) {
                return (
                    <>
                        <Text style={styles.player}>{players[1].p6name}</Text>
                        <Text style={styles.player}>{players[1].p7name}</Text>
                        <Text style={styles.player}>{players[1].p8name}</Text>
                        <Text style={styles.player}>{players[1].p9name}</Text>
                        <Text style={styles.player}>{players[1].p10name}</Text>
                    </>
                )
            }
        }
    }

    function scoreButton() {
        if (canScore) {
            if (run) {
                return (
                    <View style={styles.scoreButtonView}>
                        <View style={styles.row}>
                            <Button title='+1' onPress={() => setScoreTeam1(scoreTeam1 + 1)} />
                            <Button title='+2' onPress={() => setScoreTeam1(scoreTeam1 + 2)} />
                            <Button title='+3' onPress={() => setScoreTeam1(scoreTeam1 + 3)} />
                        </View>
                        <View style={styles.row}>
                            <Button title='+1' onPress={() => setScoreTeam2(scoreTeam2 + 1)} />
                            <Button title='+2' onPress={() => setScoreTeam2(scoreTeam2 + 2)} />
                            <Button title='+3' onPress={() => setScoreTeam2(scoreTeam2 + 3)} />
                        </View>
                    </View>
                );
            }
        }
    }

    function timerButton() {
        if (canScore) {
            if (run) {
                return (
                    <View>
                        <TouchableOpacity onPress={() => setRun(false)}>
                            <Icon name='pause' type='material' size={40} />
                        </TouchableOpacity>
                    </View>
                )
            } else {
                return (
                    <View>
                        <TouchableOpacity onPress={() => setRun(true)}>
                            <Icon name='play-arrow' type='material' size={40}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }

    return (
        <>
            <View>
                <CountDown
                    until={600}
                    digitStyle={{ backgroundColor: "transparent" }}
                    showSeparator={true}
                    timeToShow={["H", "M", "S"]}
                    timeLabels={{ h: null, m: null, s: null }}
                    onFinish={() => setCanScore(false)}
                    running={run}
                />
                {timerButton()}
            </View>
            <View style={styles.teamView}>
                <Text style={styles.teamTitle}>{players[0].teamTitle.toUpperCase()}</Text>
                <Text style={styles.teamTitle}>{players[1].teamTitle.toUpperCase()}</Text>
            </View>
            <View style={styles.vs}>
                <Text style={styles.vsTitle}>VS</Text>
            </View>
            <View style={styles.scoreView}>
                <Text style={styles.scoreText}><AnimateNumber interval={150} countBy={1} value={scoreTeam1} /></Text>
                <Text style={styles.scoreText}><AnimateNumber interval={150} countBy={1} value={scoreTeam2} /></Text>
            </View>
            <View style={styles.playersList}>
                <View>
                    {TeamList(players[2].place, 1)}
                </View>
                <View>
                    {TeamList(players[2].place, 2)}
                </View>
            </View>
            {scoreButton()}
        </>
    )
}
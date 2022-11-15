import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import { Avatar, Button, ListItem } from "react-native-elements";
import { Modalize } from "react-native-modalize";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import ModalView from "./ModalView";
import { SafeAreaView } from "react-native-safe-area-context";

const BasketTeam = ({ navigation }) => {

    const [place, setPlace] = React.useState(5);

    const [T1Name, setT1Name] = React.useState("EQUIPE 1");
    const [T2Name, setT2Name] = React.useState("EQUIPE 2");

    const [playerName1, setPlayerName1] = React.useState('Joueur 1');
    const [playerPosition1, setPosition1] = React.useState('');
    const [playerNumber1, setPlayerNumber1] = React.useState("1");

    const [playerName2, setPlayerName2] = React.useState('Joueur 2');
    const [playerPosition2, setPosition2] = React.useState('');
    const [playerNumber2, setPlayerNumber2] = React.useState("2");

    const [playerName3, setPlayerName3] = React.useState('Joueur 3');
    const [playerPosition3, setPosition3] = React.useState('');
    const [playerNumber3, setPlayerNumber3] = React.useState("3");

    const [playerName4, setPlayerName4] = React.useState('Joueur 4');
    const [playerPosition4, setPosition4] = React.useState('');
    const [playerNumber4, setPlayerNumber4] = React.useState("4");

    const [playerName5, setPlayerName5] = React.useState('Joueur 5');
    const [playerPosition5, setPosition5] = React.useState('');
    const [playerNumber5, setPlayerNumber5] = React.useState("5");

    const [playerName6, setPlayerName6] = React.useState('Joueur 6');
    const [playerPosition6, setPosition6] = React.useState('');
    const [playerNumber6, setPlayerNumber6] = React.useState("6");

    const [playerName7, setPlayerName7] = React.useState('Joueur 7');
    const [playerPosition7, setPosition7] = React.useState('');
    const [playerNumber7, setPlayerNumber7] = React.useState("7");

    const [playerName8, setPlayerName8] = React.useState('Joueur 8');
    const [playerPosition8, setPosition8] = React.useState('');
    const [playerNumber8, setPlayerNumber8] = React.useState("8");

    const [playerName9, setPlayerName9] = React.useState('Joueur 9');
    const [playerPosition9, setPosition9] = React.useState('');
    const [playerNumber9, setPlayerNumber9] = React.useState("9");

    const [playerName10, setPlayerName10] = React.useState('Joueur 10');
    const [playerPosition10, setPosition10] = React.useState('');
    const [playerNumber10, setPlayerNumber10] = React.useState("10");

    const [timerM, setTimerM] = React.useState("600");
    const [timerS, setTimerS] = React.useState("0");

    const T1Modalize = React.useRef(null);
    const T2Modalize = React.useRef(null);

    const P1Modalize = React.useRef(null);
    const P2Modalize = React.useRef(null);
    const P3Modalize = React.useRef(null);
    const P4Modalize = React.useRef(null);
    const P5Modalize = React.useRef(null);
    const P6Modalize = React.useRef(null);
    const P7Modalize = React.useRef(null);
    const P8Modalize = React.useRef(null);
    const P9Modalize = React.useRef(null);
    const P10Modalize = React.useRef(null);

    const TimeModalize = React.useRef(null);


    if (place == 3) {

        return (
            <>
                <View>
                    <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: "auto" }}>
                        <Button
                            title="3 V 3"
                            buttonStyle={styles.buttonTeam}
                            containerStyle={styles.containerTeam}
                            titleStyle={{ fontWeight: 'bold' }}
                            onPress={() => setPlace(3)}
                            disabled={true}
                        />
                        <Button
                            title="5 V 5"
                            buttonStyle={styles.buttonTeam}
                            containerStyle={styles.containerTeam}
                            titleStyle={{ fontWeight: 'bold' }}
                            onPress={() => setPlace(5)}
                        />
                    </View>

                    <SafeAreaView style={{ paddingTop: 0 }}>
                            
                            <View>
                                <TouchableOpacity onPress={() => TimeModalize.current?.open()} style={{flexDirection:"row", justifyContent:"center"}}>
                                    <Text>{timerM / 60}</Text><Text> : </Text><Text>{timerS}</Text>
                                </TouchableOpacity>
                            </View>

                        <View style={styles.team}>
                            <TouchableOpacity onPress={() => T1Modalize.current?.open()}>
                                <Text>{T1Name}</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => P1Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber1} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName1}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition1}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>


                            <View>
                                <TouchableOpacity onPress={() => P2Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber2} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName2}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition2}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P3Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber3} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName3}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition3}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.team}>
                            <TouchableOpacity onPress={() => T2Modalize.current?.open()}>
                                <Text>{T2Name}</Text>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => P4Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber4} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName4}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition4}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P5Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber5} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName5}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition5}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P6Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber6} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName6}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition6}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <Button buttonStyle={styles.buttonTeam} containerStyle={{ marginVertical: 30 }} title="COMMENCER" onPress={() => navigation.navigate('basketMatch', [{
                                teamTitle: T1Name,
                                p1number: playerNumber1,
                                p1name: playerName1,
                                p1pos: playerPosition1,
                                p2number: playerNumber2,
                                p2name: playerName2,
                                p2pos: playerPosition2,
                                p3number: playerNumber3,
                                p3name: playerName3,
                                p3pos: playerPosition3,
                            }, {
                                teamTitle: T2Name,
                                p4number: playerNumber4,
                                p4name: playerName4,
                                p4pos: playerPosition4,
                                p5number: playerNumber5,
                                p5name: playerName5,
                                p5pos: playerPosition5,
                                p6number: playerNumber6,
                                p6name: playerName6,
                                p6pos: playerPosition6,

                            }, { place: place }])} />
                        </View>
                    </SafeAreaView>
                </View>
                <Modalize ref={T1Modalize} modalHeight={700}>
                    <View>
                        <Text>
                            Nom de l'équipe numéro 1 :
                        </Text>
                        <TextInput style={{ borderWidth: 1, borderColor: "black", padding: 10 }} value={T1Name} onChangeText={(value) => setT1Name(value)} />
                    </View>
                </Modalize>
                <Modalize ref={T2Modalize} modalHeight={700}>
                    <View>
                        <Text>
                            Nom de l'équipe numéro 2 :
                        </Text>
                        <TextInput style={{ borderWidth: 1, borderColor: "black", padding: 10 }} value={T2Name} onChangeText={(value) => setT2Name(value)} />
                    </View>
                </Modalize>
                <Modalize ref={P1Modalize} modalHeight={700}>
                    <ModalView name={playerName1} setName={setPlayerName1} position={playerPosition1} setPosition={setPosition1} number={playerNumber1} setNumber={setPlayerNumber1} modal={P1Modalize} />
                </Modalize>
                <Modalize ref={P2Modalize} modalHeight={700}>
                    <ModalView name={playerName2} setName={setPlayerName2} position={playerPosition2} setPosition={setPosition2} number={playerNumber2} setNumber={setPlayerNumber2} modal={P2Modalize} />
                </Modalize>
                <Modalize ref={P3Modalize} modalHeight={700}>
                    <ModalView name={playerName3} setName={setPlayerName3} position={playerPosition3} setPosition={setPosition3} number={playerNumber3} setNumber={setPlayerNumber3} modal={P3Modalize} />
                </Modalize>
                <Modalize ref={P4Modalize} modalHeight={700}>
                    <ModalView name={playerName4} setName={setPlayerName4} position={playerPosition4} setPosition={setPosition4} number={playerNumber4} setNumber={setPlayerNumber4} modal={P4Modalize} />
                </Modalize>
                <Modalize ref={P5Modalize} modalHeight={700}>
                    <ModalView name={playerName5} setName={setPlayerName5} position={playerPosition5} setPosition={setPosition5} number={playerNumber5} setNumber={setPlayerNumber5} modal={P5Modalize} />
                </Modalize>
                <Modalize ref={P6Modalize} modalHeight={700}>
                    <ModalView name={playerName6} setName={setPlayerName6} position={playerPosition6} setPosition={setPosition6} number={playerNumber6} setNumber={setPlayerNumber6} modal={P6Modalize} />
                </Modalize>
                <Modalize ref={TimeModalize} modalHeight={500}>
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <Picker
                        style={{width:100}}
                        selectedValue={timerM}
                        onValueChange={(itemValue, itemIndex) => setTimerM(itemValue)}>
                            <Picker value="60" label="01"/>
                            <Picker value="120" label="02"/>
                            <Picker value="180" label="03"/>
                            <Picker value="240" label="04"/>
                            <Picker value="300" label="05"/>
                            <Picker value="360" label="06"/>
                            <Picker value="420" label="07"/>
                            <Picker value="480" label="08"/>
                            <Picker value="540" label="09"/>
                            <Picker value="600" label="10"/>
                            <Picker value="900" label="15"/>
                            <Picker value="1200" label="20"/>
                            <Picker value="1500" label="25"/>
                            <Picker value="1800" label="30"/>
                            <Picker value="2100" label="35"/>

                        </Picker>
                        <Text> : </Text>
                        <Picker
                        style={{width:100}}
                        selectedValue={timerS}
                        onValueChange={(itemValue, itemIndex) => setTimerS(itemValue)}>
                            <Picker value="0" label="00"/>
                            <Picker value="15" label="15"/>
                            <Picker value="30" label="30"/>
                            <Picker value="45" label="45"/>
                        </Picker>
                    </View>
                </Modalize>
            </>
        )
    } else if (place == 5) {
        return (
            <View>
                <View style={{ flexDirection: "row", marginLeft: "auto", marginRight: "auto" }}>
                    <Button
                        title="3 V 3"
                        buttonStyle={styles.buttonTeam}
                        containerStyle={styles.containerTeam}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => setPlace(3)}
                    />
                    <Button
                        title="5 V 5"
                        buttonStyle={styles.buttonTeam}
                        containerStyle={styles.containerTeam}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => setPlace(5)}
                        disabled={true}
                    />
                </View>

                <SafeAreaView style={{ paddingTop: 0 }}>
                    <ScrollView style={{ marginBottom: 130 }}>
                        <View style={styles.team}>
                            <Text>EQUIPE 1</Text>
                            <View>
                                <TouchableOpacity onPress={() => P1Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber1} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName1}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition1}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>


                            <View>
                                <TouchableOpacity onPress={() => P2Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber2} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName2}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition2}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P3Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber3} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName3}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition3}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P4Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber4} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName4}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition4}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P5Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber5} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName5}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition5}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.team}>
                            <Text>EQUIPE 2</Text>
                            <View>
                                <TouchableOpacity onPress={() => P6Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber6} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName6}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition6}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P7Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber7} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName7}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition7}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P8Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber8} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName8}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition8}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P9Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber9} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName9}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition9}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => P10Modalize.current?.open()}>
                                    <ListItem>
                                        <Avatar rounded title={playerNumber10} size="small" containerStyle={{ backgroundColor: 'grey' }} />
                                        <ListItem.Content>
                                            <ListItem.Title>
                                                {playerName10}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>
                                                {playerPosition10}
                                            </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron color="grey" />
                                    </ListItem>
                                </TouchableOpacity>
                                <Button title="Button" onPress={() => console.log([{
                                    number: playerNumber1, name: playerName1,
                                },])} />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <Modalize ref={P1Modalize} modalHeight={700}>
                    <ModalView name={playerName1} setName={setPlayerName1} position={playerPosition1} setPosition={setPosition1} number={playerNumber1} setNumber={setPlayerNumber1} modal={P1Modalize} />
                </Modalize>
                <Modalize ref={P2Modalize} modalHeight={700}>
                    <ModalView name={playerName2} setName={setPlayerName2} position={playerPosition2} setPosition={setPosition2} number={playerNumber2} setNumber={setPlayerNumber2} modal={P2Modalize} />
                </Modalize>
                <Modalize ref={P3Modalize} modalHeight={700}>
                    <ModalView name={playerName3} setName={setPlayerName3} position={playerPosition3} setPosition={setPosition3} number={playerNumber3} setNumber={setPlayerNumber3} modal={P3Modalize} />
                </Modalize>
                <Modalize ref={P4Modalize} modalHeight={700}>
                    <ModalView name={playerName4} setName={setPlayerName4} position={playerPosition4} setPosition={setPosition4} number={playerNumber4} setNumber={setPlayerNumber4} modal={P4Modalize} />
                </Modalize>
                <Modalize ref={P5Modalize} modalHeight={700}>
                    <ModalView name={playerName5} setName={setPlayerName5} position={playerPosition5} setPosition={setPosition5} number={playerNumber5} setNumber={setPlayerNumber5} modal={P5Modalize} />
                </Modalize>
                <Modalize ref={P6Modalize} modalHeight={700}>
                    <ModalView name={playerName6} setName={setPlayerName6} position={playerPosition6} setPosition={setPosition6} number={playerNumber6} setNumber={setPlayerNumber6} modal={P6Modalize} />
                </Modalize>
                <Modalize ref={P7Modalize} modalHeight={700}>
                    <ModalView name={playerName7} setName={setPlayerName7} position={playerPosition7} setPosition={setPosition7} number={playerNumber7} setNumber={setPlayerNumber7} modal={P7Modalize} />
                </Modalize>
                <Modalize ref={P8Modalize} modalHeight={700}>
                    <ModalView name={playerName8} setName={setPlayerName8} position={playerPosition8} setPosition={setPosition8} number={playerNumber8} setNumber={setPlayerNumber8} modal={P8Modalize} />
                </Modalize>
                <Modalize ref={P9Modalize} modalHeight={700}>
                    <ModalView name={playerName9} setName={setPlayerName9} position={playerPosition9} setPosition={setPosition9} number={playerNumber9} setNumber={setPlayerNumber9} modal={P9Modalize} />
                </Modalize>
                <Modalize ref={P10Modalize} modalHeight={700}>
                    <ModalView name={playerName10} setName={setPlayerName10} position={playerPosition10} setPosition={setPosition10} number={playerNumber10} setNumber={setPlayerNumber10} modal={P10Modalize} />
                </Modalize>
            </View>

        )
    }
}

export default BasketTeam;
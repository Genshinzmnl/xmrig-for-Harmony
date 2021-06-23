import React from 'react';
import { LayoutChangeEvent, ScrollView, StyleSheet, View } from 'react-native';
import { SessionDataContext } from '../../../core/session-data/session-data.context';
import { Text } from '@ui-kitten/components';
import { XMRigView } from '../components/miner/xmrig-view';
import { StartMode } from '../../../core/session-data/session-data.interface';

const MinerScreen = () => {
    
    const {workingState, minerData, hashrateHistoryRef, working} = React.useContext(SessionDataContext);
    const [sparklineWidth, setSparklineWidth] = React.useState<number>(0);

    return (
        <ScrollView nestedScrollEnabled={true} style={working == StartMode.STOP ? [styles.layout, styles.hidden] : styles.layout}>
            <View style={styles.section} onLayout={(event:LayoutChangeEvent) => setSparklineWidth(event.nativeEvent.layout.width)}>
                <Text category='h5' style={styles.sectionTitle}>Miner Statistics</Text>
                <Text category='label' style={styles.sectionSubTitle}>XMRig</Text>
            </View>
            <XMRigView workingState={workingState} fullWidth={sparklineWidth} minerData={minerData} hashrateHistory={hashrateHistoryRef} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    layout: {
        marginHorizontal: 15,
        marginBottom: 10,
        height: '100%'
    },
    hidden: {
        opacity: 0.3
    },
    section: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, paddingTop: 0
    },
    sectionTitle: {
        flexDirection:'column'
    },
    sectionSubTitle: {
        backgroundColor: 'rgba(134, 65, 244, 0.1)', flexDirection:'column', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 5
    }
});

export default MinerScreen;
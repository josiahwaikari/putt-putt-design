import IPhoneFrame from './IPhoneFrame';
import SetupScreen from '../views/manager/SetupScreen';

const ManagerModeScreen = () => {
    return (
        <div className="w-full bg-gray-100 flex flex-col items-center p-8 overflow-x-auto">
            <div className="flex flex-row gap-12 items-start justify-center min-w-max">

                {/* Screen 1: Initial State */}
                <IPhoneFrame title="State 1: Initial Load">
                    <SetupScreen
                        initialState="initial"
                        defaultValues={{ name: '', holes: 9, strokes: 36 }} // Default 9 holes
                    />
                </IPhoneFrame>

                {/* Screen 2: Active Input */}
                <IPhoneFrame title="State 2: Active & Typing">
                    <SetupScreen
                        initialState="input"
                        defaultValues={{ name: 'Pine Valley', holes: 18, strokes: 72 }}
                    />
                </IPhoneFrame>

                {/* Screen 3: Output / QR */}
                <IPhoneFrame title="State 3: Generated">
                    <SetupScreen
                        initialState="generated"
                        defaultValues={{ name: 'Pine Valley Golf Club', holes: 18, strokes: 72 }}
                    />
                </IPhoneFrame>

            </div>
        </div>
    );
};

export default ManagerModeScreen;

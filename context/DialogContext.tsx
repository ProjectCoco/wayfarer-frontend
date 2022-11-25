import { createContext, useContext, useState } from "react";
import Modal from "../components/modal/Modal";
import SignInDialog from "../components/SignIn/SignInDialog";

interface ConfigOption {
  onClose(): void;
  onConfirm(): void;
  contentNode: React.ReactNode;
}

interface DialogContextValue {
  open: (config: ConfigOption) => void;
  close: () => void;
}

export const DialogContext = createContext<DialogContextValue | null>(null);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<ConfigOption | null>(null);

  const open = (config: ConfigOption) => {
    setVisible(true);
    setConfig(config);
  };

  const close = () => {
    config?.onClose();
    setVisible(false);
  };

  const confirm = () => {
    config?.onConfirm();
    setVisible(false);
  };

  return (
    <DialogContext.Provider value={{ open, close }}>
      {children}
      {/* <SignInDialog visible={visible} onClose={close} onConfirm={confirm} /> */}
      <Modal visible={visible}>{config?.contentNode}</Modal>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

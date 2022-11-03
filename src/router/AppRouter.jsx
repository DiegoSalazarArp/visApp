
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useCheckUser } from "../hooks/useCheckUser";
import { SelectProfile } from "../journal/components/SelectProfile";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {
  const { status } = useCheckUser();

  if (status === "checking") {
    return <CheckingAuth />;
  }else if(status == 'pending'){
    return <SelectProfile/>
  }
  return (
    <Routes>
      {status === "authenticatedd" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* <Route path="auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};

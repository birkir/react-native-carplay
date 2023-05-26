export interface AlertAction {
  id: string;
  title: string;
  style?: 'default' | 'cancel' | 'destructive';
}
